let todo_list=[];

let save= localStorage.getItem('Score_Save');
//console.log("save",save);

reset_Score(save);
function reset_Score(save_t){
  if(save_t!== null ) {
    todo_list=JSON.parse(save_t);
    }
  else{
    todo_list =[];
  }
  localStorage.setItem('Score_Save',JSON.stringify(todo_list));
  }


function storeele(){
  let take_task=document.querySelector('#task');
  let task= take_task.value;

  let take_date=document.querySelector('#date');
  let date= take_date.value;

  if (task != ''){
    todo_list.push({
      task: task,
      date: date,
    });
  }; 
    localStorage.setItem('Score_Save',JSON.stringify(todo_list));
    take_task.value='';
    take_date.value='';
};

display();
function display(){
    let container = document.querySelector('.display-container');
    let newHtml=''
    for (let i=0; i<todo_list.length; i++){
      let task_obj = todo_list[i].task;
      let date_obj= todo_list[i].date;
      newHtml += `
      <div>
      <span id="text_t">${task_obj}</span>
        <span id="date_t">${date_obj}</span>
        <button id="delete" onclick=" 
            todo_list.splice(${i},1);
            display();
            localStorage.setItem('Score_Save',JSON.stringify(todo_list));
        " >Delete</button>
      </div> 
      `
    }
    container.innerHTML=newHtml;

};



let name_org;
let save_name= localStorage.getItem('name');
name_fn(save_name);

function name_fn(save_name){
  if (save_name!==undefined ){
    document.querySelector('#name_whole_con').hidden=true;
    name_org=JSON.parse(save_name);
    let date=new Date();
    let hour=date.getHours();
    if (hour> 5 && hour <12) document.querySelector('#name_dis').innerText="Good morning, " + name_org;
    else if(hour> 12 && hour <18) document.querySelector('#name_dis').innerText="Good afternoon, " + name_org;
    else if(hour> 18 && hour <22) document.querySelector('#name_dis').innerText="Good evening, " + name_org;
    else  document.querySelector('#name_dis').innerText="Good night, " + name_org;
  }
  else {
    document.querySelector('#name_whole_con').hidden=false;
    //name_org='';
  }
  localStorage.setItem('name',JSON.stringify(name_org));
}

function name_submit(){
  name_org=document.querySelector('#name_in').value;
  localStorage.setItem('name',JSON.stringify(name_org));
  let save_name= localStorage.getItem('name');
  name_fn(save_name);
}


if (save_name==undefined){
  document.querySelector('#name_whole_con').hidden=false;
}
// if (save_name==null){
//   document.querySelector('#name_whole_con').hidden=false;
// }
