import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
    return (
        <div>
            <Card>
                <CardImg src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardBody>
                        {dish.description}
                    </CardBody>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments!=null){

        const commentItems = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {formatDate(comment.date)}</p>
                </li>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentItems}
                </ul>
            </div>
        );
    }
    else
        return (<div></div>);
}

function formatDate(date){
    if (date !== undefined && date !== "") {
        var date = new Date(date);
        var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
        var str = month[date.getMonth()] + " " +  date.getDate() +  ", " + date.getFullYear();
        return str;
    }
    return "";
}

const DishDetail = (props) => {   
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
}

export default DishDetail;