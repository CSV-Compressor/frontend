const compressCsv = async (file) => {
    
    // Create a FormData object to hold the file data
    const formData = new FormData()
    formData.append('file', file)

    // Send a POST request to the server to compress the file
    return await fetch(`${import.meta.env.VITE_API_URL}/csv/compress`, {
        method:"POST",
        body: formData
    })
    .then(res => {
        // Check if the response is not OK and throw an error if so
        if(!res.ok) throw new Error('Failed to compress file')

        // Convert the response to a Blob
        return res.blob() 
    })
    .then(blob => {
         // Generate a ZIP file name based on the original CSV file name
        const zipName = file.name.replace('.csv', '-compressed.zip')

        // Create a URL for the Blob object
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the file download
        const a = document.createElement('a');
        a.href = url;
        a.download = zipName; 
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(url);
        // Return a success response
        return {
            success: true,
            message: "File successfuly compressed"
        }
    })
    .catch(err => {
        // Log the error and return a failure response
        console.error(err)
        return{
            success:false,
            message: err.message
        }
    })
}

export {compressCsv}