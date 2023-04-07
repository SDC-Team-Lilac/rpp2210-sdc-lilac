import axios from 'axios';

const useInteraction = (event, componentName) => {

  let element = event.target.localName;
  let time = new Date(Date.now());
  let module = componentName;

  let data = {
    element,
    time,
    module
  }

  axios.post('/interactions', data)
  .then(()=>{
    console.log('success!')
  })
  .catch((err)=>{
    console.log(err)
  })
}

export default useInteraction;