import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';



import { Link } from 'react-router-dom';
import { add } from '../store/cartSlice';



function BasicExample({width,img,title,description,price,id,item}) {
 const dispatch = useDispatch();
 
const handleAdd=(item)=>{
  dispatch(add({...item,quantity:1}))

}


  return (

    <Card style={{ width: width }}>
      <Link to={`/productpage/${id}`}>      <Card.Img style={{cursor:"pointer"}} variant="top" src={img} /></Link>

      <Card.Body>
      <Card.Text>
      {title}
        </Card.Text>
        <Card.Title></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button onClick={()=>handleAdd(item)} className='btn btn-primary rounded-pill w-100' style={{backgroundColor:"#57bf6c",borderColor:"#57bf6c",color:"white",fontFamily:"Orbitron"}}>Add to cart| {price}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;