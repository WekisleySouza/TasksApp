import { Provider } from 'react-redux'
import StackRoute from './routes/Stack.routes'
import store from './redux/store'

export default function App(){
    return (
        <Provider store={store} >
            <StackRoute/>
        </Provider>
    )
}