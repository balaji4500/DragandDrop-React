import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";
import './sidenav.css';


const Sidenavs = () => {
   const User =[
    {
        "name": "Joe Linux",
        "role": "Cheif techonology officer",
        "id": 1,
        "img":require('./Screenshot (63).png'),

        task:[

            {
                "name": "Ron Blomquist",
                "role": "technology",
                 "id": 5,
                 "img":require('./Screenshot (67).png'),

            },
            {
                "name": "Micheal Rubin",
                "role": "technology",
                "id": 6,
                "img":require('./Screenshot (70).png'),

            },

        ]
    },
    {
        "name": "Linda May",
        "role": "Cheif business officer",
        "id": 3,
        "img":require('./Screenshot (65).png'),
        task:[

            {
                "name": "Alica Lopez",
                "role": "business",
                "id": 7,
               "img":require('./Screenshot (68).png'),

            },
            {
                "name": "Mary Jhonson",
                "role": "business",
                  "id": 8,
              "img":require('./Screenshot (71).png'),

            },
            {
                "name": "Kirk Douglas",
                "role": "business",
                "id": 9,
               "img":require('./Screenshot (72).png'),

            },


        ]

    },
    {
        "name": "Jhon Green",
        "role": "Cheif accounting officer",
        "id": 4,
        "img":require('./Screenshot (66).png'),

        task:[

            {
                "name": "Erica Reel",
                "role": "accounting",
                "id": 10,
              "img":require('./Screenshot (69).png'),

            }
        

        ]
    },
  



]

//==== this state is for getting the adta from details==== ///
  const [data,Setdata]=useState(User)


  const ondragend=(result)=>{
if(!result.destination) return
const {source,destination}=result

if(source.droppableId !== destination.droppableId){
  const sourcecolindex =data.findIndex(e=>e.id === source.droppableId)
  const destinationcolindex = data.findIndex(e=>e.id === destination.droppableId)

const sourcecol = data[sourcecolindex]
const destinationcol = data[destinationcolindex]


const sourcetask = [...sourcecol.task]
const destinationtask=[...destinationcol.task]

const[removed] = sourcetask.splice(source.index,1)
destinationtask.splice(destination.index,0,removed)


data[sourcecolindex].task=sourcetask
data[destinationcolindex].task=destinationtask

Setdata(data)

}
  }


//======= these states for search and filter option =====//
  const [search, Setsearch] = useState("")
  const [results, Setresults] = useState([])


  const fetchdata = (value) => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then(json => {
        const result = json.filter((user) => {
          return user && user.role && user.role.toLowerCase().includes(value)
        })
        Setresults(result)

      })

  }

  const handlechange = (value) => {
    Setsearch(value)
    fetchdata(value)
  }




  const { collapseSidebar } = useProSidebar();
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar id="aa" style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Details</h2>
          </MenuItem>
        </Menu><br />
        <div id="search">
          <div id="inputwrapper">
            <input type="text" placeholder="search..." id="input" value={search} onChange={(e) => { handlechange(e.target.value) }}></input>
          </div>
          <div id='searchbox'>
          
          {
            results.map((result,index)=>{
              return <div key={index}> {result.name}  </div>
            })
          }
          
          
          
          </div>
        </div>

      </Sidebar>


      <div id='head'>
        <div id="head1">
        <h6>  Mark Hill</h6>
   <p>Cheif Executive Officer</p>
        </div>

</div>
<div id='no2'></div>
<div id='no1'></div>
<div id="no3"></div>
<div id="no4"></div>
<div id="no5"></div>



<DragDropContext onDragEnd={ondragend}>
  

<div id="section1">
<div id="div1"> 
{
data &&
data.map((section=>(

  // droppable section

<Droppable key="p1" droppableId={section.id}>
  {(provided)=>(
<p1 id="div2" {...provided.droppableProps} ref={provided.innerRef} >
<div id="section">
<img src={section.img}></img>
{section.name} 
<p id="p1">
{section.role}
</p>
  </div>
  <div id="line6"></div>
  <br></br>


  
{/* draggable section */}

  <div id="section2">
 {
section.task.map((tt,index)=>(
  <Draggable key={tt.id} draggableId={tt.id.toString()} index={index} >
    {(provided)=>(
<div   id="task"  ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}  >
<>
<img src={tt.img}></img>
{tt.name}
<p id="p1">
{tt.role}
</p>
</>
</div>
)}
</Draggable>
))
 }
 {provided.placeholder}
  </div>
</p1>

  )

  }


</Droppable>

)))
}
</div>

  </div>
  </DragDropContext>
</div>
  
  );














}
export default Sidenavs;