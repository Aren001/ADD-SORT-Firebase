import React , {useState , useEffect} from 'react';

import firebase from './firebase';

import TimeList from './TimeList';

import InputForm from './form';





firebase.firestore().collection('times').add({
    name:'Aren',
    timeSec:45
})




const   App = (props) => {




    return (
        <div  >
            
            <h1>Just Clock It</h1>
            <TimeList/>

            <InputForm/>
         

            </div>
        
    )
}

export default  App;


