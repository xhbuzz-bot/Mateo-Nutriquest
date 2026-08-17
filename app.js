const habits=[
  {name:'Desayuno equilibrado',detail:'Incluye proteína, fruta o cereal integral.',xp:20,done:false},
  {name:'Hidratación',detail:'Alcanza tu meta de agua durante el día.',xp:20,done:false},
  {name:'Frutas y verduras',detail:'Suma al menos 5 porciones variadas.',xp:25,done:false},
  {name:'Movimiento',detail:'Acumula al menos 30 minutos de actividad.',xp:20,done:false},
  {name:'Cena consciente',detail:'Come sin pantallas y escucha tu saciedad.',xp:15,done:false}
];
const state={water:0,meal:0,activity:0,xp:0};
const $=s=>document.querySelector(s);
function render(){
  const completed=habits.filter(h=>h.done).length;
  const progress=Math.round((completed/habits.length)*100);
  $('#progressText').textContent=progress+'%'; $('#progressBar').style.width=progress+'%';
  $('#points').textContent=state.xp; $('#completedCount').textContent=`${completed}/${habits.length}`;
  $('#waterValue').textContent=`${state.water} / 8`; $('#mealValue').textContent=`${state.meal} / 3`; $('#activityValue').textContent=`${state.activity} / 30`;
  $('#motivation').textContent=progress===100?'¡Quest completada! Mañana hay una nueva aventura.':progress>=60?'¡Vas genial! Unos pasos más y completas tu misión.':'Completa tus hábitos para avanzar en tu quest.';
  $('#habitList').innerHTML=habits.map((h,i)=>`<div class="habit ${h.done?'done':''}" data-habit="${i}"><div class="check">${h.done?'✓':''}</div><div><strong>${h.name}</strong><p>${h.detail} · +${h.xp} XP</p></div></div>`).join('');
  document.querySelectorAll('[data-habit]').forEach(el=>el.onclick=()=>{const h=habits[+el.dataset.habit];h.done=!h.done;state.xp+=h.done?h.xp:-h.xp;render()});
}
document.querySelectorAll('[data-action]').forEach(btn=>btn.onclick=()=>{const a=btn.dataset.action;if(a==='water')state.water=Math.min(8,state.water+1);if(a==='meal')state.meal=Math.min(3,state.meal+1);if(a==='activity')state.activity=Math.min(30,state.activity+10);render()});
render();
