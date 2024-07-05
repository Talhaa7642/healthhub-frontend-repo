import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { APP_FONT } from "../../constants/font";
import { useGetCountriesQuery } from "../../redux/reducers/appointmentSlice";
import dataFetching from "../dataFetching/dataFetching";

const theme = createTheme({
  typography: {
    fontFamily: APP_FONT,
  },
});

function CountriesTable({ data }: any) {

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ width: "100%", overflowY: "hidden", marginTop: '6%' }}>
        <Typography variant="h4" align="center" sx={{ my: 3, fontWeight: 700 }}>
          All Countries
        </Typography>
        
          <TableContainer sx={{ margin: "auto", maxHeight: 575 }}>
            <Table stickyHeader aria-label="countries table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Region
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Population
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Capital
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((country: any) => (
                  <TableRow key={country.cca3}>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {country.name.common}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {country.region}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {country.population.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          fontSize: "14px",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {country.capital?.[0] || "N/A"}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Paper>
    </ThemeProvider>
  );
}

export default dataFetching(CountriesTable, useGetCountriesQuery);
