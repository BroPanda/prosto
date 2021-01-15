import {Route} from "react-router-dom";
import MainContent from "./home_page/MainContent";
import DryCleaner from "./home_page/DryCleaner/DryCleaner";
import SupCleaning from "./home_page/SupCleaning/SupCleaning";

export default function Content(){
    return(

        <>

            <Route exact path="/" component={MainContent}/>
            <Route exact path="/DryCleaner" component={DryCleaner}/>
            <Route exact path="/SupCleaning" component={SupCleaning}/>

        </>
    )
}