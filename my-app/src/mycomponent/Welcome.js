import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ListItems from './ListItems';


class Welcome extends Component {

    constructor(){
        super();
        this.state={
            
            items:[],
            currentItems:{
                Name: "",
                Email: "",
                id: ''
            }
              
        }
    }

    onChangeFunction=(event)=>{
        let allname = event.target.name;
        let allvalue= event.target.value;

        this.setState({
            currentItems:{
                ...this.state.currentItems,
                [allname]: allvalue,
                id: Date.now() 
            }             
        });

    }

    addFunction =(e)=>{
        e.preventDefault();
        
        const itemvalue =this.state.currentItems;
        if(itemvalue.Name!=="" && itemvalue.Email!==""){
            const allItems=[...this.state.items,itemvalue];
            this.setState({
                items: allItems,
                currentItems:{
                    Name: "",
                    Email: "",
                    id: ""
                }               
            });                  
        }
        if(itemvalue.Name===""|| itemvalue.Email===""){
            alert("!! please enter your name and email =>");
        }  
        
    }

    deleteItems=(id)=>{
        const filterItems =this.state.items.filter(resume=> resume.id !==id)
        this.setState({
            items: filterItems
        })
    }   
    

    // editHandler=(textvalue,id)=>{
    //     const inputValue =this.state.items;
    //     inputValue.map(editmethod=>{
    //         if(editmethod.id===id){
    //            editmethod.text=textvalue               
    //         }
    //     });

    //     this.setState({
    //         items: inputValue
    //     })
    // }

    render() {        

        return (
            <div className="App">
                <div >
                    <form onSubmit={this.addFunction}>

                        <input className="inputdesign"
                        type="text"
                        name="Name"  
                        value={this.state.currentItems.Name}
                        onChange={this.onChangeFunction}
                        placeholder="Enter your name..."
                        />

                        <input className="inputdesign"
                        type="email"
                        name="Email" 
                        value={this.state.currentItems.Email}
                        onChange={this.onChangeFunction} 
                        placeholder="Enter your email..."
                        />
                        <button type="submit" className='buttondesign'>Add</button> 

                    </form>
                   
                    {/* <p>{this.state.currentItems.Name}</p>
                    <p>{this.state.currentItems.Email}</p> */}
                </div>
                
                <ListItems
                 items={this.state.items}
                 deleteItems={this.deleteItems}
                 />
            </div>
        );
    }
}

export default Welcome;