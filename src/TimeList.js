import React , {useEffect,useState} from 'react';

import firebase from './firebase';



const SORT_OPTIONS = {
    'TIME_ASC':{column:'timeSec',directions:'asc'},
    'TIME_DESC':{column:'timeSec',directions:'desc'},

    'NAME_ASC':{column:'name',directions:'asc'},
    'NAME_DESC':{column:'name',directions:'desc'}
}



function useTimes(sortBy='TIME_ASC'){

    const [times , setTimes] = useState([]);
    

    useEffect(() => {
      const unSubscribe =  firebase
        .firestore()
        .collection('times')
        .orderBy(SORT_OPTIONS[sortBy].column ,SORT_OPTIONS[sortBy].directions)
        .onSnapshot(snapshot => {
            const newTimes = snapshot.docs.map((doc) =>({
                id:doc.id,
                ...doc.data()
            }))
            setTimes(newTimes);
        })
        return () => unSubscribe()
    }, [sortBy])
    return times
}


const TimeList = (props) => {

    const [sortBy , setSortBy] = useState('TIME_ASC');
    const times = useTimes(sortBy);
    



    return(
        <div>
            <h2>Time List</h2>
            <div>
                <label>Sort By</label>{''}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value='TIME_ASC'>Time 1</option>
                    <option value='TIME_DESC'>Time 2</option>
                    <option disabled></option>
                    <option value='NAME_ASC'>Title 1</option>
                    <option value='NAME_DESC'>Title 2</option>
                </select>
            </div>

            
                
                 
                    <ul >
                        {
                            times.map(time =>
                                
                                <li key={time.id}>
                                    
                                <div >
                                    {time.name}    
                                    <code style={{marginLeft:'55px'}}> {time.timeSec} seconds </code>
                                </div>
                            </li>
                                
                            )
                        }
                
            </ul>
                

                
            

            

        </div>
    )

}
export default TimeList;