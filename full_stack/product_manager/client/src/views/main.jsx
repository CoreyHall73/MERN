import React, {useState} from 'react'
import Form from '../components/Form'
import Display from '../components/Display'

const Main = () => {

    //state to track refresh
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState)
    }

    return (
    <fieldset>
        <legend>MainView.jsx</legend>
        <Form refresh={refresh} />
        <Display refreshState={refreshState} />
    </fieldset>
    )
}

export default Main