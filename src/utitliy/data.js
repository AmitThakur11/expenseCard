export const expenses  = [
    {
      "id": 1,
      "area": "Food",
      "expense": 200
    },
    {
      "id": 2,
      "area": "Shopping",
      "expense": 150
    },
    {
      "id": 3,
      "area": "Movies",
      "expense": 100
    }
  ]

  export let color = ["#FFB800", "#1BA493", "#E44816"];

  export let total = (data) => {
    return data.reduce((acc, val) => {
      return (acc += val.expense);
    }, 0);
  };
  
  export let optionList = ["This week", "This month", "All time"];

  export let pickOption =(value,option,setOption)=>{
    setOption({...option,value : value,toggle:false})
  }
