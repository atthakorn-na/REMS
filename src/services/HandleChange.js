const HandleChange = (event, hook) => {
    event.preventDefault();
    const { name, value } = event.target; 
    
    hook((prev) => ({
        ...prev,
        [name]: value
    }));
};

export default HandleChange;