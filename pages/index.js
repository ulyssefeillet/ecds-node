import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import ArticleTable from "./ArticleTable";
import Hero from "./Hero";
import Button from '@mui/material/Button';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { CCollapse, CCard, CCardBody } from '@coreui/react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Map from "./Map";

export default function Home() {
  const [dataResponse, setdataResponse] = useState([])
  const [visible, setVisible] = useState(false)
  const inputQueryRef = useRef(null);
  const selectQueryRef = useRef(null);
  const [fromDate, setFromDate] = useState(dayjs('2022-01-01'))
  const [toDate, setToDate] = useState(dayjs('2022-12-31'))
  const [checked, setChecked] = useState(false)
  const [selectQuery, setSelectQuery] = useState(null)

  const handleChangePeriodic = () => {
    setChecked(checked ? false : true)
  }

  const handleClickQuery = () => {
    console.log(checked)
    const params = {'query' : inputQueryRef.current.value, 'fromDate' : fromDate.format('YYYY-MM-DD'), 'toDate' : toDate.format('YYYY-MM-DD'), 'periodicity' : checked ? 1 : 0}
    insertQuery(params)
  }
  
  const handleClickQuerySearch = () => {
    console.log(selectQuery[0].label)
    const params = {'query' : selectQuery[0].label, 'fromDate' : fromDate.format('YYYY-MM-DD'), 'toDate' : toDate.format('YYYY-MM-DD'), 'periodicity' : checked ? 1 : 0}
    insertQuery(params)
  }

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:8080/api/getdata`
      const response = await fetch(apiUrlEndpoint)
      const res = await response.json();
      setdataResponse(res.articles);
    }
    getPageData();
  }, []);

  const insertQuery = (params) => {
    return fetch("http://localhost:8080/api/insertquery?" + 'query=' + params.query + '&fromDate=' 
    + params.fromDate + '&toDate=' + params.toDate + '&periodicity=' + params.periodicity);
  };

  const Countries = [
    { label: "Eruption"},
    { label: "Tsunami"},
    { label: "Flood"},
    { label: "Earthquake"},
    { label: "Wildfire"},
    { label: "Blizzards"}
  ];

  const body = typeof document !== 'undefined' && document.querySelector('footer');

  return (
    <div>
        <Hero></Hero>
        <div className={styles.mainContainer}>
          <div style={{
            maxWidth: '950px',
            margin: 'auto'
            }}
          >
            <div className="container p-4">
              <div className="row mb-4">
                  <div className="col-sm-6">
                    <Select 
                      options={Countries} 
                      isMulti 
                      onChange={(newValue) => {
                        setSelectQuery(newValue);
                      }}
                      menuPortalTarget={body}
                      menuPlacement='top'
                      />
                  </div>
                <div className="col-md-4">
                  <Button 
                    variant="contained" 
                    color="success"
                    onClick={handleClickQuerySearch}
                    >
                    Ajouter une recherche
                  </Button></div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <input 
                    ref={inputQueryRef}
                    focus 
                    placeholder='Enter a query...'
                  />
                </div>
                <div className="col-md-6">
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handleClickQuery}
                    >
                    Ajouter une query
                  </Button>
                </div>
              </div>
              <div className="row pt-4">
              <div className="col">
                  <Button variant="contained" color="success" onClick={() => setVisible(!visible)}>Plus de filtres</Button>
                  <CCollapse visible={visible}>
                    <CCard className="mt-3">
                      <CCardBody>
                        <div className="row">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className="col-sm-4">
                              <DesktopDatePicker
                                label="From"
                                value={fromDate}
                                onChange={(newValue) => {
                                  setFromDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </div>

                            <div className="col-sm-4 pl-4">
                              <DesktopDatePicker
                                label="To"
                                value={toDate}
                                onChange={(newValue) => {
                                  setToDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </div>
                            <div className="col-sm-4 pl-4 pt-2">
                              <FormGroup>
                                <FormControlLabel 
                                  control=
                                  {
                                    <Checkbox 
                                      onChange={(newValue) => {
                                        handleChangePeriodic(newValue);
                                      }}
                                    />
                                  } 
                                  label="Rechercher périodiquement" />
                              </FormGroup>
                            </div>
                          </LocalizationProvider>
                        </div>
                      </CCardBody>
                    </CCard>
                </CCollapse>
              </div>
              </div>
            </div>
            <ArticleTable articles={dataResponse}></ArticleTable>
            <Map></Map>
          </div>
        </div>
    </div>
  );
}