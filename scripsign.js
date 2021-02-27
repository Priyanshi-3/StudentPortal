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
  
  //retrieve
  let submitsignin = document.getElementById('submitsignin')
  submitsignin.addEventListener("click", (e) => {
    e.preventDefault()
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let email = document.getElementById('eml').value
    let password = document.getElementById('pass').value
    let clss = document.getElementById('class').value
    
    // let eml = document.getElementById('eml').value
    // alert(eml);
    // firebase.database().ref('register').once('value',(snap)=>{
        // alert(email);
        alert("hi"+firstName);
    if(firstName.localeCompare("f")!=0)
    {
        alert("sorry");
        return false;
        // var script = document.createElement('script'); 
          
        // script.src =  
        // "https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"; 
          
        // document.head.appendChild(script) 
        // script.src =  
        // "https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js"; 
          
        // document.head.appendChild(script) 
        // script.src =  
        // "script.js"; 
          
        // document.head.appendChild(script) 
        
    }
    else{
        var flag=0;
    //     alert(snap.val());
    db.get().then((querySnapshot) => {
        // alert(email+"11111");
        var size=querySnapshot.size;
        for (var i in querySnapshot.docs) {
            const doc = querySnapshot.docs[i];
            // doc.data() is never undefined for query doc snapshots
            
            // alert(doc.data().email+"_");
            if(email.localeCompare(doc.data().email)==0)
            {
                // alert(doc.data().email+"_");
                if(firstName.localeCompare(doc.data().fname)!=0 || lastName.localeCompare(doc.data().lname)!=0)
                {alert("Incorrect name");}
                else if(password.localeCompare(doc.data().pasword)!=0)
                {alert("Incorrect password");}
                else if(clss.localeCompare(doc.data().class)!=0)
                {alert("Incorrect class");}
                else
                {
                alert("WELCOME "+firstName+" "+lastName);
            
                }
                break;
            }
            else
            flag++;
            // if(flag==1)
            // return false;
            // alert(eml);
        }
        if(flag==size)
  alert("Incorrect email")
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
    // const snapshot = await firebase.firestore().collection('register').get()
    // alert(snapshot.docs.map(doc => doc.data()));
  })
//   if(flag==0)
//   alert("Incorrect email")
    }
})
    //Prevent Default Form Submission Behavior
    // e.preventDefault()
    // alert("hi");
    //Get Form Values
//     const db=firebase.database().ref("register");
//   db.on("value",gotData);
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
      
      function gotData(doc)
      {
          
        // alert("hi");
        alert(doc.data().email);
        // let firstName = document.getElementById('fname').value
        // let lastName = document.getElementById('lname').value
        // let email = document.getElementById('eml').value
        // let password = document.getElementById('pass').value
        // let clss = document.getElementById('class').value
        // // alert(email);
        // let info=data.val();
        // let f=0;
        // let keys=Object.keys(info);
        // for (let index = 0; index < keys.length; index++) {
        //   let indt=keys[i];
        //   let eml=info[indt].email;
        //   alert(eml);
        //   if(email.compareTo(eml)==0)
        //   {
        //     alert("match");
        //     f=1;
        //   }
          
        // }
        // if(f==0)
        // alert("no");
      }
  
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