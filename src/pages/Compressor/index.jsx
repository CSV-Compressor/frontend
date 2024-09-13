import { useState } from "react";
import { compressCsv } from "../../services/csv";
import { useSnackbar } from "notistack";
import Loader from "../../component/Loader";
import "./Compressor.scss";

const Compressor = () => {
  //Hook of snackbars and the states of the page
  const { enqueueSnackbar } = useSnackbar();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Function that updates the state "file" with the selected csv file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  
  // Function that resets the uploader and the "file" state
  const handleCancel = () => {
    setFile(null)
    document.getElementById("Uploader").value = "";
  }

  // Function which launches the compression of the csv file
  const handleSubmit = async (e) => {
    e.preventDefault();

    //activate the loader
    setIsLoading(true);
    
    
    // service function that makes the API call
    compressCsv(file).then((json) => {
      // notification in case of error or success of the compression process
      if (json.success) {
        handleCancel()
        enqueueSnackbar(json.message, { variant: "success" });
      } else {
        enqueueSnackbar(json.message, { variant: "error" });
      }
      setIsLoading(false);
    });
  };

  return (
    <div className="compressor-container">
      <h1 className="compressor-title">Hello Planity !</h1>
      <p className="compressor-text">
        {" "}
        Use our convenient tool to compress your CSV files into ZIP archives
        with just a single click. It helps reduce the size of your data while
        making it easier to share and store. Upload your CSV file and receive it
        instantly in ZIP format!
      </p>
      <form className="compressor-form">
        <input
          id="Uploader"
          className="compressor-uploader"
          type="file"
          accept=".csv"
          onChange={(e) => handleFileChange(e)}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <label
              htmlFor="Uploader"
              className={`compressor-uploader__label ${!file ? "empty" : ""}`}
            >
              {file ? file.name : "Choose a file"}
            </label>
            {file && (
              <div className="compressor-form__btns">
                <button className="cancel" onClick={() => handleCancel}>
                  cancel
                </button>
                <button className="validate" onClick={(e) => handleSubmit(e)}>
                  compress
                </button>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default Compressor;
