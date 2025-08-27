import './App.css'
import Display from "./CounterWithRedux/features/counter/ui/Display/Display.tsx";
import {Provider} from "react-redux";
import {store} from "./CounterWithRedux/app/store.ts";


function App() {

    return (

        <Provider store={store}>
            <Display/>
        </Provider>

    )
}

export default App
