import Rightcardcontent from './rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className=' h-full w-60 relative overflow-hidden rounded-3xl mx-4  flex gap-10 shrink-0'>
      <img className='object-cover h-full w-60' src={props.image} alt="" />
      
      <Rightcardcontent id={props.id} tag={props.tag} intro= {props.intro} />
    </div>
  )
}

export default Rightcard
