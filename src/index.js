import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) =>
            <button className="square" onClick={() => props.onClick()}>
                {props.value}
            </button>

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares:Array(9).fill(null),
            xIsNext:true,
            players:this.props.players
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = <h1>You Won</h1>;
            var button = document.createElement("Button");
            var textnode = document.createTextNode("Reset");
            button.appendChild(textnode);
            button.className += "resetButton";
            button.setAttribute('onclick',"reset()");
            document.getElementById("board").appendChild(button);

        }else if(this.state.players[0] === undefined || this.state.players[0] === null || this.state.players[0] === ''){
            status = 'Next player: ';
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? this.state.players[0] : this.state.players[1]);
        }
        return (
            <div id="board" className="displayNone">
                <div className="status"><b>{status}</b></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(){
        super()
        this.state = {
            players:[]
        }
        this.addPlayer = this.addPlayer.bind(this)
    }
    addPlayer(event){
        event.preventDefault()

        let player1 = this.refs.p1.value
        let player2 = this.refs.p2.value
        if(player1 !== '' && player2 !== ''){
        this.setState({
            players: this.state.players.splice(0,2,player1, player2),
        })
        var a = document.getElementById("board");
        a.className += "displayblock";
        this.refs.p1.value = ''
        this.refs.p2.value = ''
        }else{
            alert("Please Enter Both Player's Name")
        }
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <p className="text-dark text-center title">Please Add Players to Begin</p>
                            <form onSubmit={this.addPlayer} className="mb-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Player 1</span>
                                    </div>
                                    <input type="text" className="form-control" ref="p1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Player 2</span>
                                    </div>
                                    <input type="text" className="form-control" ref="p2"/>
                                </div>


                                <button className="btn btn-outline-secondary btn-block" type="submit" id="addPlayer">Add Players</button>
                            </form>
                            <Board players={this.state.players}/>
                        </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);