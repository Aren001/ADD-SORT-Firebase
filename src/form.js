import React , {useState} from 'react';

import firebase from './firebase';



const InputForm = (props) => {

    const [title , setTitle] = useState('');
    const [time , setTime] = useState('');

    const onSubbmit = (e) => {
        e.preventDefault();
        firebase
        .firestore()
        .collection('times')
        .add({
            name:title,
            timeSec:parseInt(time)
        })
        .then(() =>{
            setTitle('');
            setTime('');
        })
    }


    return(
        <div>
            <form onSubmit={onSubbmit}>
                <h1>Add Time Title</h1>
                <div>
                    <label>Title</label>
                    <input type='text' value={title} onChange={e => setTitle(e.currentTarget.value)}/>
                </div>
                <div>
                    <label>Time</label>
                    <input type='number' value={time} onChange={e => setTime(e.currentTarget.value)}/>
                </div>
                <button>Add TIME</button>
            </form>
        </div>
    )
}
export default  InputForm;