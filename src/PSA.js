import React, { useState } from 'react';
import {
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Container
} from '@mui/material';

const TableCellInput = ({ name, value, onChange }) => (
  <TableCell>
    <TextField
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  </TableCell>
);

const PSAKontrolle = () => {
  // Zustandsvariablen für die Eingabefelder
  const [daten, setDaten] = useState({
    nr: '',
    hersteller: '',
    material: '',
    typ: '',
    enNorm: '',
    kennzeichnung: '',
    baujahr: '',
    zustand: '',
    ergebnis: '',
    naechstePruefung: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDaten({
      ...daten,
      [name]: value
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Sachkundenprüfung der PSA gegen Absturz gem. BGR 198/199
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr.</TableCell>
            <TableCell>Hersteller - Material - Typ</TableCell>
            <TableCell>EN Norm</TableCell>
            <TableCell>Kennzeichnung</TableCell>
            <TableCell>Baujahr</TableCell>
            <TableCell>Zustand</TableCell>
            <TableCell>Ergebnis</TableCell>
            <TableCell>Nächste Prüfung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCellInput
              name="nr"
              value={daten.nr}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="hersteller"
              value={daten.hersteller}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="enNorm"
              value={daten.enNorm}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="kennzeichnung"
              value={daten.kennzeichnung}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="baujahr"
              value={daten.baujahr}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="zustand"
              value={daten.zustand}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="ergebnis"
              value={daten.ergebnis}
              onChange={handleInputChange}
            />
            <TableCellInput
              name="naechstePruefung"
              value={daten.naechstePruefung}
              onChange={handleInputChange}
            />
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="body1" align="justify" gutterBottom>
        Der Prüfumfang schließt die Überprüfung der Geschichte, die Sichtprüfung
        der Sicherheitselemente, die haptische Überprüfung der
        Materialbeschaffenheit, die Sichtprüfung der Komfortelemente sowie die
        Überprüfung der Festigkeit und Funktion mit ein.
        Die Prüfergebnisse werden in Abstufungen Gut - Überwachen - Reparieren - Aussondern klassifiziert.
        </Typography>
    </Container>
  );
};

export default PSAKontrolle;