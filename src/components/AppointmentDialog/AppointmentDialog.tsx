import React, { useState } from 'react';
import { KoaThemeOptions } from 'client';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

import styles from './styles';

interface Props {
  koaThemeOptions?: KoaThemeOptions;
}

function AppointmentDialog({ koaThemeOptions }: Props): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const [selectedAppointmentTopic, setSelectedAppointmentTopic] = useState('');
  const [isProfessional, setIsProfessional] = useState('');
  const [nearestLocation, setNearestLocation] = useState('');
  const [anythingElse, setAnythingElse] = useState('');
  const router = useRouter();

  // console.log('THEME OPTIONS? ', typeof koaThemeOptions, koaThemeOptions.bookAnAppointment);

  const {
    appointmentType,
    appointmentTopics,
    topicsPrompt,
    professionalPrompt,
    locations,
    otherPrompt,
    locationPlaceholderText,
  } = koaThemeOptions?.bookAnAppointment;

  const handleSubmit = () => {
    delete router.query.modal;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      { shallow: true },
    );
  };

  const handleClose = () => {
    delete router.query.modal;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <Dialog
      open={router.query.modal && router.query.modal === 'appointment' ? true : false}
      onClose={handleClose}
      PaperProps={{ square: true }}
      aria-labelledby={'Book an Appointment'}
      aria-describedby={'text'}
      maxWidth="xl"
      disableScrollLock
    >
      <Box sx={styles.root}>
        <DialogTitle sx={styles.dialogTitle}>Book an Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl variant="outlined" fullWidth>
              <Box sx={styles.formInputRow}>
                <Box sx={styles.formInputWrapper}>
                  <Typography sx={styles.formInputLabel}>First Name*</Typography>
                  <Input
                    sx={styles.formInput}
                    id="first-name-input"
                    // onKeyPress={onKeyPress}
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    disableUnderline
                  />
                </Box>
                <Box sx={styles.formInputWrapper}>
                  <Typography sx={styles.formInputLabel}>Last Name*</Typography>
                  <Input
                    sx={styles.formInput}
                    id="first-name-input"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    disableUnderline
                  />
                </Box>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>Email address*</Typography>
                <Input
                  sx={styles.formInput}
                  id="first-name-input"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  disableUnderline
                />
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>Nearest Showroom Location*</Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    sx={styles.selectInput}
                    value={nearestLocation}
                    onChange={(event) => setNearestLocation(event.target.value)}
                    renderValue={(selected) => {
                      if (!selected) {
                        return <Typography sx={styles.formInputPlaceholder}>{locationPlaceholderText}</Typography>;
                      }

                      return selected;
                    }}
                  >
                    {locations.split(',').map((location, index) => (
                      <MenuItem key={index} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>Appointment Type*</Typography>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={selectedAppointmentType}
                  onChange={(event) => setSelectedAppointmentType(event.target.value)}
                >
                  {appointmentType.split(',').map((appointment, index) => (
                    <FormControlLabel
                      key={index}
                      value={appointment}
                      control={
                        <Radio
                          sx={{
                            color: '#333333',
                            '&.Mui-checked': {
                              color: '#333333',
                            },
                          }}
                        />
                      }
                      label={appointment}
                    />
                  ))}
                </RadioGroup>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>{topicsPrompt}</Typography>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={selectedAppointmentTopic}
                  onChange={(event) => setSelectedAppointmentTopic(event.target.value)}
                >
                  {appointmentTopics.split(',').map((appointment, index) => (
                    <FormControlLabel
                      key={index}
                      value={appointment}
                      control={
                        <Radio
                          sx={{
                            color: '#333333',
                            '&.Mui-checked': {
                              color: '#333333',
                            },
                          }}
                        />
                      }
                      label={appointment}
                    />
                  ))}
                </RadioGroup>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>{professionalPrompt}</Typography>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={isProfessional}
                  onChange={(event) => setIsProfessional(event.target.value)}
                >
                  <FormControlLabel
                    value={'yes'}
                    control={
                      <Radio
                        sx={{
                          color: '#333333',
                          '&.Mui-checked': {
                            color: '#333333',
                          },
                        }}
                      />
                    }
                    label={'Yes'}
                  />
                  <FormControlLabel
                    value={'no'}
                    control={
                      <Radio
                        sx={{
                          color: '#333333',
                          '&.Mui-checked': {
                            color: '#333333',
                          },
                        }}
                      />
                    }
                    label={'No'}
                  />
                </RadioGroup>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>{otherPrompt}</Typography>
                <Input
                  sx={styles.formInput}
                  id="first-name-input"
                  value={anythingElse}
                  onChange={(event) => setAnythingElse(event.target.value)}
                  disableUnderline
                  fullWidth
                  multiline
                  minRows={3}
                  maxRows={3}
                />
              </Box>
            </FormControl>
          </DialogContentText>
          <Box sx={styles.dialogButtonsContainer}>
            <Button sx={styles.dialogButton} onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default AppointmentDialog;
