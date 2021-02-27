// var form=document.getElementById("form");
// var fname=form.getElementById("fname").value;
// alert(fname);

// const config = {
//     apiKey: "AIzaSyCo3jDGmI4VXJR2Ng_tmea2M7UGgQ7SQ20",
//     authDomain: "assg3-e8649.firebaseapp.com",
//     projectId: "assg3-e8649",
//     storageBucket: "assg3-e8649.appspot.com",
//     messagingSenderId: "742169255461",
//     appId: "1:742169255461:web:307072c5ddf5429df0a9cc",
//     measurementId: "G-VN5V6WMRHF"
// };

var config = {
    apiKey: "AIzaSyCCfhOKM741YSw45iqNjT5u9IWGfo9VEBk",
    authDomain: "studentform-a5c00.firebaseapp.com",
    projectId: "studentform-a5c00",
    storageBucket: "studentform-a5c00.appspot.com",
    messagingSenderId: "850249851948",
    appId: "1:850249851948:web:b333d586b77de9943cdd89",
    measurementId: "G-0QHTYVJGJ3"
  };
  firebase.initializeApp(config);
  
  var firestore = firebase.firestore()

  //Variable to access database collection
  const db = firestore.collection("register")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    // let adno = document.getElementById('adno').value
    // let firstName = document.getElementById('fname').value
    // let lastName = document.getElementById('lname').value
    // let email = document.getElementById('eml').value
    // let password = document.getElementById('pass').value
    // let clss = document.getElementById('class').value
    // let dob = document.getElementById('dob').value
    // var gender = document.getElementsByName('gen');
    // var i
    // let gen
    // for(i=0;i<gender.length;i++)
    // {
    //     if(gender[i].checked)
    //     gen=gender[i].value;
    // }
    
    // let address = document.getElementById('add').value
  //   alert("hi"+adno);
  
    
  //   //     alert(snap.val());
  //   db.get().then((querySnapshot) => {
  //       // alert(email+"11111");
  //       size=querySnapshot.size;
  //       for (var i in querySnapshot.docs) {
  //           const doc = querySnapshot.docs[i];
  //           // doc.data() is never undefined for query doc snapshots
            
  //           // alert(doc.data().email+"_");
  //           if(email.localeCompare(doc.data().email)!=0)
  //           {
  //             flag++;
  //           }
  //           else{
  //             alert("EMAIL ALREADY EXISTS");
  //             break;
  //           }
  //         }
  //         // alert(flag+" "+size);
  //             if(flag==size)
  //   {
  //   //     alert("sorry");
  //   //     return false;
  //   //     // var script = document.createElement('script'); 
          
  //       // script.src =  
  //       // "https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"; 
          
  //       // document.head.appendChild(script) 
  //       // script.src =  
  //       // "https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"; 
          
  //       // document.head.appendChild(script) 
  //       // script.src =  
  //       // "script.js"; 
          
  //       // document.head.appendChild(script) 
        
  //   // }
  //   // else{
  //   //Save Form Data To Firebase
  //   db.doc().set({
  //     admsno:adno,
  //     fname: firstName,
  //     lname: lastName,
  //     email:email,
  //     pasword: password,
  //     class:clss,
  //     dob:dob,
  //     gender:gen,
  //     address:address
  //   }).then( () => {
  //     console.log("Data saved")
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  
  //   //alert
  //   alert("Your Form Has Been Submitted Successfully")
  //   document.getElementById("form").reset();
  // }
  // })
  alert("hi");
  axios({
    method: 'get',
    url: 'https://firestore.googleapis.com/v1/projects/studentform-a5c00/databases/(default)/documents/register',
    // params: {
    //   _limit: 5
    // }
  })
    .then(res => check(res))
    .catch(err => console.error(err));
        })
              
  function check(res)
  {
     alert("ghbghg");
     let adno = document.getElementById('adno').value
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let email = document.getElementById('eml').value
    let password = document.getElementById('pass').value
    let clss = document.getElementById('class').value
    let dob = document.getElementById('dob').value
    var gender = document.getElementsByName('gen');
    var i
    let gen
    for(i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
        gen=gender[i].value;
    }
    
    let address = document.getElementById('add').value
     var flag=0,size;
     size=res.data.documents.length;
     for(var i=0;i<size;i++)
      {
        if(email.localeCompare(res.data.documents[i].fields.email.stringValue)==0)
        {
          alert("EMAIL ALREADY EXISTS");
          break;
        }
        else{
          flag++;
        }
      }
      if(flag==size)
      {
        // alert("hi");
        // console.log(adno);
        // console.log(firstName);
        // console.log(lastName);
        // console.log(email);
        // console.log(password);
        // console.log(clss);
        // console.log(dob);
        // console.log(gen);
        // console.log(address);
  // axios({
  //   method: 'post',
  //   url: 'https://firestore.googleapis.com/v1/projects/studentform-a5c00/databases/(default)/documents/register',
  //   fields: {
  //     admsno: {stringValue : adno },
  //     fname: { stringValue : firstName },
  //     lname: {stringValue:lastName},
  //     email:{stringValue:email},
  //     pasword: {stringValue:password},
  //     class:{integerValue:clss},
  //     dob:{stringValue:dob},
  //     gender:{stringValue:gen},
  //     address:{stringValue:address}
  //   }
  //   // params: {
  //   //   _limit: 5
  //   // }
  // })
  //   .then(res => alert("REGISTRATION COMPLETED"))
  //   .catch(err => console.error(err)); 

    axios.post("https://firestore.googleapis.com/v1/projects/studentform-a5c00/databases/(default)/documents/register", 
    { 
        fields: { 
          admsno: {stringValue : adno },
              fname: { stringValue : firstName },
              lname: {stringValue:lastName},
              email:{stringValue:email},
              pasword: {stringValue:password},
              class:{integerValue:clss},
              dob:{stringValue:dob},
              gender:{stringValue:gen},
              address:{stringValue:address}
        } 
    }
    ).then(res => { 
        console.log("Post created") 
    })

      }
  }           
              
              

  // document.getElementById('submit').onclick=function(){
  //   let firstName = document.getElementById('fname').value
  //   let lastName = document.getElementById('lname').value
  //   let email = document.getElementById('eml').value
  //   let password = document.getElementById('pass').value
  //   let clss = document.getElementById('class').value
  //   let dob = document.getElementById('dob').value
  //   var gender = document.getElementsByName('gen');
  //   var i
  //   let gen
  //   for(i=0;i<gender.length;i++)
  //   {
  //       if(gender[i].checked)
  //       gen=gender[i].value;
  //   }
    
  //   let address = document.getElementById('add').value

  //   firebase.database().ref('register/'+email).set({
  //     fname: firstName,
  //     lname: lastName,
  //     email:email,
  //     pasword: password,
  //     class:clss,
  //     dob:dob,
  //     gender:gen,
  //     address:address
  //   });
  // }


  //retrieve
  // let submitsignin = document.getElementById('submitsignin')
  // submitsignin.addEventListener("click", (e) => {
  //   //Prevent Default Form Submission Behavior
  //   // e.preventDefault()
  //   alert("hi");
  //   //Get Form Values
  //   let firstName = document.getElementById('fname').value
  //   let lastName = document.getElementById('lname').value
  //   let email = document.getElementById('eml').value
  //   let password = document.getElementById('pass').value
  //   let clss = document.getElementById('class').value
  //   // let dob = document.getElementById('dob').value
    // var gender = document.getElementsByName('gen');
    // var i
    // let gen
    // for(i=0;i<gender.length;i++)
    // {
    //     if(gender[i].checked)
    //     gen=gender[i].value;
    // }
    
    // let address = document.getElementById('add').value
      // db.on("value",gotData);
      // function gotData(data)
      // {
      //   let info=data.val();
      //   let f=0;
      //   let keys=Object.keys(info);
      //   for (let index = 0; index < keys.length; index++) {
      //     let indt=keys[i];
      //     let eml=info[indt].email;
      //     if(email.compareTo(eml)==0)
      //     {
      //       console.log("match");
      //       f=1;
      //     }
          
      //   }
      //   if(f==0)
      //   console.log("no");
      // }
  
    // //Save Form Data To Firebase
    // db.doc().set({
    //   fname: firstName,
    //   lname: lastName,
    //   email:email,
    //   pasword: password,
    //   class:clss,
    //   dob:dob,
    //   gender:gen,
    //   address:address
    // }).then( () => {
    //   console.log("Data saved")
    // }).catch((error) => {
    //   console.log(error)
    // })
  
    // //alert
    // alert("Your Form Has Been Submitted Successfully")
    // document.getElementById("form").reset();

  // })

//   let submitsignin = document.getElementById('submitsignin')
//   submitsignin.addEventListener("click", (e) => {
//     e.preventDefault()
//     let firstName = document.getElementById('fname').value
//     let lastName = document.getElementById('lname').value
//     let email = document.getElementById('eml').value
//     let password = document.getElementById('pass').value
//     let clss = document.getElementById('class').value
    
//     // let eml = document.getElementById('eml').value
//     // alert(eml);
//     // firebase.database().ref('register').once('value',(snap)=>{
//         // alert(email);
//         var flag=0;
//     //     alert(snap.val());
//     db.get().then((querySnapshot) => {
//         // alert(email+"11111");
//         var size=querySnapshot.size;
//         for (var i in querySnapshot.docs) {
//             const doc = querySnapshot.docs[i];
//             // doc.data() is never undefined for query doc snapshots
            
//             // alert(doc.data().email+"_");
//             if(email.localeCompare(doc.data().email)==0)
//             {
//                 // alert(doc.data().email+"_");
//                 if(firstName.localeCompare(doc.data().fname)!=0 || lastName.localeCompare(doc.data().lname)!=0)
//                 {alert("Incorrect name");}
//                 else if(password.localeCompare(doc.data().pasword)!=0)
//                 {alert("Incorrect password");}
//                 else if(clss.localeCompare(doc.data().class)!=0)
//                 {alert("Incorrect class");}
//                 else
//                 {
//                 alert("WELCOME "+firstName+" "+lastName);
            
//                 }
//                 break;
//             }
//             else
//             flag++;
//             // if(flag==1)
//             // return false;
//             // alert(eml);
//         }
//         if(flag==size)
//   alert("Incorrect email")
//     // })
//     // .catch((error) => {
//     //     console.log("Error getting documents: ", error);
//     // });
//     // const snapshot = await firebase.firestore().collection('register').get()
//     // alert(snapshot.docs.map(doc => doc.data()));
//   })
// //   if(flag==0)
// //   alert("Incorrect email")
// })