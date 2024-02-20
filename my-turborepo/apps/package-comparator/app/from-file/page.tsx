import styles from "../page.module.css";
import FileUploaderComponent from "./components/FileUploader";
import FixedSizeGrid from "./components/FixedSizeGrid";

function page() {
    return (
        <div className={styles.main}>
            <FileUploaderComponent />
            <FixedSizeGrid />
        </div>
    )
}

export default page