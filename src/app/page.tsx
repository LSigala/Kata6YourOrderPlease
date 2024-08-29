'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function orderSentence(e: any){
        e.preventDefault();
    
        const data = {
            Sentence: (e.target.sentence.value)
        }

        let separateSentence = data.Sentence.split(" ")
        
        
        obtainOrder(separateSentence)   
      }

      async function obtainOrder(separateSentence: any){
        const separateString2:Array<string> = new Array<string>();

        let counter = ["1", "2", "3", "4", "5", "6", "7", "8" , "9"];
        if(counter.toString() <= separateSentence.length.toString()) {
          
          for(let item of counter){
            
            for (let item2 of separateSentence) {
              const element = item2;
              let item3 = item2.split("")
  
              for(let item4 of item3){
                  if (item4 == item) {
                    separateString2.push(element)
                }
              }
            }
          }
        }
        alert(separateString2.join(" "))
      }

  return (
      <form onSubmit={orderSentence} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3  mx-auto">
                    <label>Enter Sentence</label>
                    <input type="text" className="form-control" id="sentence" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}