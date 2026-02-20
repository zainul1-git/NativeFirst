

import React, { useState } from "react";
import { Text, View ,TextInput,Button, Alert, FlatList} from "react-native";


//import { TextInput } from "react-native/types_generated/index";


function App() {

  //Mam Haleema lab task
// const[nameTI,setNameTI]=useState('')
// const[cgpa,setCgpa]=useState('')
// const[regNo,setRegNo]=useState('')
// const[section,setSection]=useState('')

// const addEmployee=()=>
// {
//   let emp={name:name,cgpa:cgpa,regno:regno,section:section};
//   setEmployees([...employees,emp])
//   console.log(employees)
// }


// Week5 Lab1 class1
// const[nameTI,setNameTI]=useState('')
// const[nameTf,setNameTf]=useState('')


//Week 5 Lab2 clas 2

const[name,setName]=useState('')
const[salary,setSalary]=useState('')
const[empId,setEmpId]=useState(101)
const[employees,setEmployees]=useState([])
const[cgpa,setcgpa]=useState('')
const[regno,setRegNo]=useState('')



const addEmployee=()=>{
  let emp={empId:empId,name:name,salary:salary,regno:regno,cgpa:cgpa} //regno:regno,cgpa:cgpa
  setEmployees([...employees,emp])
  setEmpId(empId+1)
  console.log(employees)
}

const showEmp=()=>{
  const data=employees.find(e=>e.name==name);
  //data=employees.find(e=>e.salary==salary)
  // data=employees.find(e=>e.cgpa==cgpa)
  // data=employees.find(e=>e.regno==regno)
  if(data)
    Alert.alert(data.name)
  else
    Alert.alert('Not Found')
}

  return (
    <View style={{flex:1}}>
      {

        //MAM HALEEMA LAB TASK

      /* <View>
        <Text style={{fontSize:40,textAlign:'center'}}>Employee Form</Text>

      </View>
      <View>
        <TextInput placeholder={"Enter Name"}
        onChangeText={setNameTI}
        value={nameTI}
         style={{borderWidth:2,fontSize:25,margin:10,padding:10}}></TextInput>
      </View>
      <View >
        <TextInput placeholder={"Enter Cgpa"}
        onChangeText={setCgpa}
        value={cgpa} style={{fontSize:25,borderWidth:2,margin:10,padding:10,alignSelf:'center'}}></TextInput>
      </View>

      <View>
        <TextInput
        placeholder="Enter Regno"
        onChangeText={setRegNo}
        value={regNo}
        style={{fontSize:25,borderWidth:2,margin:10,padding:10}}>
          
        </TextInput>
    </View>
   
   <View >
    <TextInput
    placeholder="Enter Section"
    onChangeText={setSection}
    value={section}
    style={{fontSize:25,borderWidth:2,margin:10,padding:10}} 
   >
    </TextInput>
   </View>

   <View>
    <Button  title="Add" onPress={addEmployee}  style={{alignSelf:'center'}}></Button>
   </View> */
      }

   {  // WEEK5 LAB1 work
   /* <View>
    <Text style={{textAlign:'center',fontSize:25}}>Employee Form</Text>
   </View>

   <View>
    <TextInput placeholder="Enter Name"
    onChangeText={setNameTI}
    value={nameTI}
    style={{borderWidth:2,fontSize:25,padding:10,margin:30}}>

    </TextInput>
   </View>

   <View>
    <Button title='ShowName' onPress={()=>setNameTf(nameTI)}>

    </Button>
   </View>
   <View>
    <Text style={{fontSize:30,textAlign:'center'}}>Welcome:{nameTf}</Text>
   </View> */}
   

   
   <View>
    <Text style={{fontSize:40,textAlign:'center'}}>Employee Form</Text>
    
   </View>
   <View>
    <TextInput placeholder="Enter Name"
    onChangeText={setName}
    value={name}
    
    style={{borderWidth:2,padding:20,margin:20,fontSize:15,borderRadius:10}}></TextInput>
   </View>

   <View>
    <TextInput placeholder="Enter Salary"
    onChangeText={setSalary}
    value={salary}
    
    style={{borderWidth:2,padding:20,margin:20,fontSize:15,borderRadius:10}}></TextInput>
   </View>


   <View>
    <TextInput 
    placeholder="Enter CGPA"
    onChangeText={setcgpa}
    value={cgpa}
    
    
    style={{borderWidth:2,borderRadius:10,padding:20,margin:20}}></TextInput>
   </View>

   <View>
    <TextInput 
    placeholder="Enter RegNo"
    onChangeText={setRegNo}
    value={regno}

    style={{borderWidth:2,borderRadius:10,padding:20,margin:20}}>

    </TextInput>
   </View>




   <View style={{alignSelf:'center',margin:20,width:'50%'}}>
   <Button title="Add" onPress={addEmployee}></Button>
   </View>

   <View style={{alignSelf:'center',margin:10,width:'50%'}}>
    <Button title="Show" onPress={showEmp}></Button>
   </View>

   <FlatList data={employees}
   renderItem={({item})=><Text style={{fontSize:25,margin:10,borderWidth:2}}>{item.name}|| {item.salary}||{item.regno}|| {item.cgpa}</Text>}></FlatList>
  


    </View>
      
      
  );
}






export default App;
