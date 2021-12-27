import React, { useState } from 'react';
import { KoaThemeOptions } from 'client';
import Email from 'helpers/smtp';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Dialog,
  DialogContent,
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
  const [selectedAppointmentType, setSelectedAppointmentType] = useState(
    koaThemeOptions?.bookAnAppointment?.appointmentType?.split(',')[0] ?? '',
  );
  const [selectedAppointmentTopic, setSelectedAppointmentTopic] = useState(
    koaThemeOptions?.bookAnAppointment?.appointmentTopics?.split(',')[0] ?? '',
  );
  const [isProfessional, setIsProfessional] = useState('no');
  const [nearestLocation, setNearestLocation] = useState('');
  const [anythingElse, setAnythingElse] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    Email.send({
      SecureToken: '73148fb3-22d0-45b8-ba7d-817674438cf5',
      To: 'shane@koalition.com',
      From: emailAddress,
      Subject: 'Website appointment request',
      Body: `Appointment request from ${firstName} ${lastName}, at ${emailAddress}. They seeking a ${selectedAppointmentType} appointment to discuss ${selectedAppointmentTopic}. The location nearest to them is ${nearestLocation}. They ${
        isProfessional ? 'are' : 'are not'
      } a designer or architect. Additional info (if any}): ${anythingElse}.`,
    }).then(() => alert('Message sent'));

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
      <Box sx={styles.outerWrapper}>
        <Box
          sx={{
            ...styles.imageContainer,
            backgroundImage: `url(${koaThemeOptions?.bookAnAppointment?.image?.mediaItemUrl})`,
          }}
        />
        <Box sx={styles.formContainer}>
          <DialogTitle sx={styles.dialogTitle}>Book an Appointment</DialogTitle>
          <DialogContent>
            <Box sx={styles.formInputRow}>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>First Name*</Typography>
                <FormControl>
                  <Input
                    sx={styles.formInput}
                    id="first-name-input"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    disableUnderline
                    required
                  />
                </FormControl>
              </Box>
              <Box sx={styles.formInputWrapper}>
                <Typography sx={styles.formInputLabel}>Last Name*</Typography>
                <FormControl>
                  <Input
                    sx={styles.formInput}
                    id="last-name-input"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    disableUnderline
                    required
                  />
                </FormControl>
              </Box>
            </Box>
            <Box sx={styles.formInputWrapper}>
              <Typography sx={styles.formInputLabel}>Email address*</Typography>
              <FormControl>
                <Input
                  sx={styles.formInput}
                  id="email-adress-input"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  disableUnderline
                  required
                />
              </FormControl>
            </Box>
            <Box sx={styles.formInputWrapper}>
              <Typography sx={styles.formInputLabel}>Nearest Showroom Location*</Typography>
              <FormControl>
                <Select
                  displayEmpty
                  sx={styles.selectInput}
                  value={nearestLocation}
                  onChange={(event) => setNearestLocation(event.target.value)}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <Typography sx={styles.formInputPlaceholder}>
                          {koaThemeOptions?.bookAnAppointment?.locationPlaceholderText}
                        </Typography>
                      );
                    }

                    return selected;
                  }}
                  required
                >
                  {koaThemeOptions?.bookAnAppointment?.locations.split(',').map((location, index) => (
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
                aria-label="appointment-types"
                name="row-radio-buttons-group"
                value={selectedAppointmentType}
                onChange={(event) => setSelectedAppointmentType(event.target.value)}
              >
                {koaThemeOptions?.bookAnAppointment?.appointmentType.split(',').map((type, index) => (
                  <FormControlLabel
                    key={index}
                    value={type}
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
                    label={type}
                  />
                ))}
              </RadioGroup>
            </Box>
            <Box sx={styles.formInputWrapper}>
              <Typography sx={styles.formInputLabel}>{koaThemeOptions?.bookAnAppointment?.topicsPrompt}</Typography>
              <RadioGroup
                row
                aria-label="appointment-topics"
                name="row-radio-buttons-group"
                value={selectedAppointmentTopic}
                onChange={(event) => setSelectedAppointmentTopic(event.target.value)}
              >
                {koaThemeOptions?.bookAnAppointment?.appointmentTopics.split(',').map((topic, index) => (
                  <FormControlLabel
                    key={index}
                    value={topic}
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
                    label={topic}
                  />
                ))}
              </RadioGroup>
            </Box>
            <Box sx={styles.formInputWrapper}>
              <Typography sx={styles.formInputLabel}>
                {koaThemeOptions?.bookAnAppointment?.professionalPrompt}
              </Typography>
              <RadioGroup
                row
                aria-label="is-professional-prompt"
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
              <Typography sx={styles.formInputLabel}>{koaThemeOptions?.bookAnAppointment?.otherPrompt}</Typography>
              <FormControl>
                <Input
                  sx={styles.formInput}
                  id="anything-else-input"
                  value={anythingElse}
                  onChange={(event) => setAnythingElse(event.target.value)}
                  disableUnderline
                  fullWidth
                  multiline
                  minRows={3}
                  maxRows={3}
                />
              </FormControl>
            </Box>
            <Box sx={styles.dialogButtonsContainer}>
              <Button sx={styles.dialogButton} onClick={() => handleSubmit()}>
                Submit
              </Button>
            </Box>
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
}

export default AppointmentDialog;
