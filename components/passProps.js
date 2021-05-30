import React, { useEffect } from "react";


class AppClass extends React.Component{

    state={
        counter:0,
        name:''
    }


    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    setCounter(newCounter){
        this.setState({counter: newCounter})
    }

    componentDidMount(){
        // fetch call
    }
    componentDidUpdate(){
        if (amount && category && difficulty && type) {
            fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
                .then(json => json.json())
                .then(response => setData(response))

            console.log(data)
        }
    }


    render(
        let {name} = this.props;
        let {counter} = this.state
        return(
            {name}
            {this.state.counter}

            <div onClick={(e)=>{
                this.setState({counter: counter + 1})
            }}></div>
        )
    )
}



function AppFunc ({name}){
    const [counter, setCounter] = useState(0)

    useEffect(()=>{

    },[counter])

    return(
        {name}
    )
}


<AppFunc name={'John'} />
<AppClass name={'John'} />