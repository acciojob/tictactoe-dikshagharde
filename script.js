//your JS code here. If required.
//your JS code here. If required.
 //your JS code here. If required.
// Wait for the DOM to be loaded
//your JS code here. If required.
  //your JS code here. If required.
let user1, user2 ;
        let turn = true ; // 1 or 2
        let message ; 
        const form = document.getElementsByTagName("form")[0];
        const messageElement = document.getElementById("message");
        const gameContainer = document.getElementById("game-container");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            user1 = e.target["user1"].value
            user2 = e.target["user2"].value;
            message = `${user1}, you're up`;
            messageElement.innerText = message ;
            gameContainer.style.display = "block";
        })
        const grid = document.getElementsByClassName("grid")[0]

        function checkIfGameOver(){
            // [
            //     [x, x, o], i
            //     [o, o, x],
            //     [o, x,  ]
            // ]
            let arr = [[], [], []];
            //          0   1   2
            console.log(grid.children.length)
            for(let i = 0 ; i < grid.children.length ; i++){
                const element = grid.children[i];
                let id = parseInt(element.id)// 1, 2, 3 ... 9
                let index = parseInt( (id-1) / 3);
                // id = 0, 1, 2, 3, 4, 5, 6, 7, 8
                arr[index].push(element.innerText)
            }

            for(let i = 0 ; i < arr.length; i++) {
                if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) return true ;
                if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) return true ;
            }

            if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) return true ;
            if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) return true ;
            return false ;
        }

        function onClickCell(e){
            // write logic of the gam
            let targetElement = e.target ;
            if(targetElement.innerText){
                return ;
            }
            if(turn){
                targetElement.innerText = "X";
            }
            else {
                targetElement.innerText = "O"
            }

            let isGameOver = checkIfGameOver();
            if(isGameOver){
                message = `${turn ? user1 : user2}, congratulations you won`;
                messageElement.innerText = message ;
            }

            turn = !turn;
            message = `${turn ? user2 : user1}, you're up` ;
            messageElement.innerText = message; 
        }

        for(let i = 0 ; i < 9; i++){
            let id = (i+1).toString();
            let gridItem = document.getElementById(id);

            gridItem.addEventListener("click", onClickCell)
        }


					
      