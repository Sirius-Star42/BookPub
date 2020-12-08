


export const Card = (props) => {
    return (
        <div>
            
            <img src={props.image.list_image} alt="image" width={props.image.list_image_width} height={props.image.list_image_height} />
            <p>{props.title}</p>
            
        </div>
   
    )
}


