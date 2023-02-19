const todoList=require('../todo');
const {all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList}=todoList();
    describe("todoList test case",()=>{
        var d=new Date();
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
        test('Should add new todo',()=>{
            expect(all.length).toBe(0);
            add({ title: 'Submit assignment', dueDate: yesterday , completed: false })
            add({ title: 'Pay rent', dueDate: today, completed: true })
            add({ title: 'Service Vehicle', dueDate: today, completed: false })
            add({ title: 'File taxes', dueDate: tomorrow, completed: false })
            add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
            
            expect(all.length).toBe(5);
            
        });
        test('should mark a todo as complete',()=>{
            expect(all[0].completed).toBe(false);
            markAsComplete(0);
            expect(all[0].completed).toBe(true);
            
        });
       test('should retrieval of overdue items',()=>{
        expect(overdue().length).toBe(1);
        
       });
       test('should retrieval of due today items',()=>{
       expect(dueToday().length).toBe(2);
       
        
       });
       test('should retrieval of due later items',()=>{
        expect(dueLater().length).toBe(2);
        
       });


    })
  