let input = prompt('what would you like to do')
const todos = ['collect eggs', 'make pancakes','walk dog', 'groom cat', 'take out the trash'];
while(input !== 'quit'&& input !=='q'){
    if(input === 'list'){
        console.log('****')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****')
    }else if (input === 'new'){
        const newTodo = prompt('whats the new todo?');
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)

    }else if(input === 'delete'){
        const index =parseInt( prompt ('ok, enter an index to delete'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`ok , ${deleted[0]}`);
        }else{
            console.log('unknown index')
        }
    }
    input = prompt('what would you like to do')
}
console.log('ok quit app')