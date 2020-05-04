const date = new Date();
const day = ("0" + (date.getDate())).slice(-2);
const month = ("0" + (date.getMonth() +　1)).slice(-2);
const today = `${day}/${month}`;

if(today  === '01/05') {
   console.log('Feliz dia do trabalho 👨‍💻💻🖥️')
}