window.addEventListener('DOMContentLoaded', () => {
    const dragArea = document.querySelector('div'); 
    const handleDragEnd = () => dragArea.className = ''; 

    dragArea.addEventListener('dragover', event => {
        event.stopPropagation(); 
        event.preventDefault(); 
        dragArea.className = 'dragover'; 
    }); 
    
    dragArea.addEventListener('drop', event => {
        event.stopPropagation(); 
        event.preventDefault(); 
        handleDragEnd(); 
        let segments = event.dataTransfer.getData('URL').split('/'); 
        if(!segments || segments.length < 5 || segments[2] !== 'github.com') return; 
        window.open('http:\/\/' + segments[3] + '.github.io/' + segments[4]); 
    }); 

    dragArea.addEventListener('dragleave', handleDragEnd); 
}); 