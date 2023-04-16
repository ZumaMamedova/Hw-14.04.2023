

// const form=document.getElementById('form');
// form.addEventListener('submit', async function(e){
// e.preventDefault();
// const formData=new FormData(form);
// formData.append('first-name',document.getElementById('first-name').value);
// formData.append('surname',document.getElementById('surname').value);
// formData.append('id',1);
// console.log([...form]);

// try{
//     const res = await axios.post('https://httpbin.org/post',formData)
//     console.log(res);
// } catch (e) {
// console.log(error);
// }


// .then(res =>console.log(res))
// .catch(err =>console.log(err))


// });


// let forms=document.querySelector(".form-data");

// forms.addEventListener('submit', function(e){
//     e.preventDefault();
//     let elem = e.target

//     let formData={
//         name: elem.querySelector('[name=first-name]').value,
//         surmame: elem.querySelector('[surname="surname"]').value,
//     };

//     axios.post('/user',{
//     firstName: 'Zulya',
//     surName: 'Aliyeva',
//     })
        
   

// })

// axios.post('/user',{
//     firstName:
//     surName:
// })

// .then(function(response){
//     console.log(response);
// })

// .catch(function(error){
//     console.log(error);
// })

axios.post("https://jsonplaceholder.typicode.com/todos/",
 {userId: 1111, id: 111315, title: "guide to the galaxy", completed: false})
.then(function(response) {console.log(response);});