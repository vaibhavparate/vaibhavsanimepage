function Animecard(props){
    return<>
    <div class="card" style={{width: "18rem"}}>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.role}</p>
    {/* <a href={props.url} class="btn btn-primary">Go To Anime</a> */}
  </div>
</div>
    </>
}
export default Animecard