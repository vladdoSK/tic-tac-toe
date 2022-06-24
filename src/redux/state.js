let store = {
    WinValue(cells) {
        const variants = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < variants.length; i++) {
            const [a, b, c] = variants[i]
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }
        return null;
    },

    

    
}
export default store;
//export function

export let state = {
    user_1: {
        username: "Vlad",
        win_1: 0,
    },
    user_2: {
        username: "Anton",
        win_2: 0,

    },
    step: 0,

    result:"Who winner?",   
}

let renderReact = () =>{

}

export let rename = (player1, player2) => {
    //console.log("55")
    state.user_1.username=player1;
    state.user_2.username=player2;
    renderReact(state);
    //this.renderReact()
}


export let reRender =(observe) =>{
    renderReact = observe;
}
