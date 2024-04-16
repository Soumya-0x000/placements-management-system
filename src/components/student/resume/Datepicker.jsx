import React, {useState} from "react"; 

const DatePicker = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
    }); 

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 

    return (
        <div>

        </div> 
    );
}; 
export default DatePicker;