import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PopoverBody, Table } from 'react-bootstrap';
import "../pages/ToDo.css"



const ToDo = () => {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState(null);
  const [todoData, settodoData] = useState([]);
  const [editToggle, seteditToggle] = useState(false);
  const [rowindex, setRowindex] = useState(null);
  const [edittodo, setedittodo] = useState(null);
  const [search, setsearch] = useState('');





  const searchbar = todoData.filter((item) => {

    if (search === "") {
      return item
    }

    else if (item.name?.toLowerCase().includes(search.toLowerCase())) {
      return item
    }

  })


  useEffect(() => {
    getTodo()
  }, [])





  // =============================todo-status{bar========================================}

  const pcount = todoData.filter((item) => item.status === "pending").length
  const Ccount = todoData.filter((item) => item.status === "completed").length


 



  /*  */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitTodo = () => {
    let body = {
      todo: todo,
      status: "pending",
      createdAt: new Date().toDateString(),
      Assigntime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      updateAt: null,
      UpdatedTime: null
    }

    // ============post kiya h ===============================================
    axios.post('http://localhost:4300/todo', body).then((res) => {
      if (res) {

        handleClose()
        getTodo()
      }

    }).catch((err) => console.log(err))
  }


  // =========================get kiya h ======================================================

  const getTodo = () => {
    axios.get('http://localhost:4300/todo').then((res) => settodoData(res.data)).catch((err) => console.log(err))
  }





  const markasdone = (e, item) => {

    const { checked } = e.target;
    const { id } = item;
    var body;
  





    if (checked) {
      body = {
        status: "completed",
        updateAt: new Date().toDateString(),
        UpdatedTime: `${new Date().getHours()}:${new Date().getMinutes()}`,

      }
    } else {
      body = {
        status: "pending",
        updateAt: null,
        UpdatedTime: null,

      }
    }

    // ================================patch method====================================
    axios.patch(`http://localhost:4300/todo/${id}`, body).then((res) => {
      getTodo()


    }).catch((err) => console.log(err))

  }

  // ======================delete kiya h =================================================
  const deleteTodo = (item) => {
    const { id } = item
    axios.delete(`http://localhost:4300/todo/${id}`).then((res) => getTodo()).catch((err) => console.log(err))


  }
  //=========================== udate ki api ================================================
  const edittodosubmit = (item) => {
    const { id } = item;
    let body = {
      todo: edittodo ? edittodo : item.todo
    }
    axios.patch(`http://localhost:4300/todo/${id}`, body).then((res) => {

      setedittodo(null);
      setRowindex(null);
      seteditToggle(false);
      getTodo();
    }).catch((err) => {
      console.log(err);

    })
  }
  useEffect(() => {
    getTodo()
  }, [])



  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- start page title --> */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">To Do</h4>
              </div>
            </div>
          </div>
          {/*================================ start from here ============ */}
          <div className=' d-flex justify-content-end'>


            <input type='search' className='srch-inpt' /><span><Button className='srch-inpt-1' onInput={(e) => setsearch(e.target.value)}>search</Button></span>




            <button className='mx-1 btn btn-sm btn-primary' onClick={handleShow}>add todo
            </button>
            <button className='mx-2 btn btn-sm btn-success'  >COMPLETED = {Ccount}
            </button>
            <button className='mx-1 btn btn-sm btn-warning'>PANDING = {pcount}
            </button>


          </div>
          {/* {================= modal code start========================} */}

          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Create ToDo</Modal.Title>
              </Modal.Header>
              <Modal.Body> <input className='form-control' placeholder='todo....' onChange={(e) => setTodo(e.target.value)} /></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={submitTodo}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          {/* modals code end */}
          {/* ===========================================Table code Start====================================================== */}


          <Table striped bordered hover className='mt-4'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Mark as done </th>
                <th>Todo</th>
                <th>Status</th>
                <th>createdAt</th>
                <th>Assigntime</th>
                <th>Updated Time</th>
                <th>UpdatedAt</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {





                todoData.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      {/* checkbox ka  code  */}
                      <td><input type='checkbox' defaultChecked={item.status == "completed"} onClick={(e) => markasdone(e, item)} /></td>
                      {/* checked ka code end */}

                      {/* edit karvana ka liya  */}
                      <td>{
                        editToggle && rowindex === index ?
                          <input defaultValue={item.todo} onChange={(e) => setedittodo(e.target.value)} />
                          :
                          item.todo


                      }</td>

                      {/* edit karvana ka liya code end */}
                      <td className={item.status === 'pending' ? 'text-primary' : item.status === 'completed' && 'text-success'}>{item.status}</td>

                      <td>{item.createdAt}</td>

                      <td>{item.Assigntime?.split(':')[0] < 12 ? item.Assigntime + " AM" : item.Assigntime + "PM"
                      }</td>
                      <td>{item.UpdatedTime ? item.UpdatedTime.split(':')[0] < 12 ? item.UpdatedTime + " AM" : item.UpdatedTime + " PM" : '-'}</td>

                      <td>{item.updateAt ? item.updateAt : '-'}</td>


                      <td>
                        <>
                          {

                            editToggle && rowindex === index ?
                              (
                                <>
                                  <button className='btn btn-sm btn-danger mx-3' onClick={() => seteditToggle(false)} >Cancel</button>
                                  <button className=' btn btn-sm btn-success' onClick={() => edittodosubmit(item)}>Save</button>



                                </>
                              ) :
                              (
                                <>
                                  <button className='btn btn-sm btn-danger mx-3' onClick={() => deleteTodo(item)} >Delete</button>
                                  <button disabled={item.status === "completed"} className=' btn btn-sm btn-success' onClick={() => { setRowindex(index); seteditToggle(true) }}>Edit</button>




                                </>

                              )
                          }


                        </>
                      </td>
                    </tr>


                  )

                })




              }


            </tbody>
          </Table>
          {/* table code ends */}


          {/* end here  */}
        </div>

      </div>


    </div>
  )
}

export default ToDo





