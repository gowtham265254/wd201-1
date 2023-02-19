const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
    
       overduearry=[];
      all.forEach(element => {
        if(element.dueDate<today && element.completed===false){
          overduearry.push("[ ]"+" "+element.title+' '+element.dueDate);

        }
      });
      return overduearry;
    }
    const dueToday = () => {
      duedatearry=[];
      
      all.forEach(element => {
        if(element.dueDate===today && element.completed==false){
          duedatearry.push('[ ]'+" "+element.title);
        }
        else if(element.dueDate===today && element.completed===true){
          duedatearry.push('[x]'+' '+element.title);
        }
      });
return duedatearry;
    }
  
    const dueLater = () => {
      
      duelater=[];
      all.forEach(element => {
        if(element.dueDate>today){
          duelater.push('[ ]'+' '+element.title+' '+element.dueDate);
        }
      });
return duelater;
    }
  
    const toDisplayableList = (list) => {
      
return list;
    }
  
     return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  formattedOverdues.forEach(element=>{
    console.log(element)
  })

  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  formattedItemsDueToday.forEach(element=>{
    console.log(element)
  })
  console.log('\n')

  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  formattedItemsDueLater.forEach(element=>{
    console.log(element);
  })
