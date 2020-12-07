async function myDisplay() {
    let myPromise = new Promise(()=> {
      return <h1>hey!</h1>;
    });
    return await myPromise;
  }
  
export default myDisplay();