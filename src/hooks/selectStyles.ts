export const selectStyles = {
    menu: (provided : any) => ({
        ...provided,
        backgroundColor: '#5d5d5d',
    }),

    option: (provided : any, state : any) => ({
        ...provided,
        color: state.isSelected ? '#f5f5f5' : '#f5f5f5',
        backgroundColor: state.isSelected ? '#000000' : '#5d5d5d',
    }),
};
  
  