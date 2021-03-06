
import Fade from 'react-reveal/Fade';
import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { cloneDeep } from 'lodash';
import { connect } from 'react-redux';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

import { Element, scroller } from 'react-scroll';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// components
import SVGComponent from './../../../commons/svg';
import Stepper from './../../../commons/stepper';

import config from './../../../../providers/config';

import { setLoadingAction } from './../../../../store/actions/global';

const styles = theme => ({
  callout: props => ({
    backgroundColor: ThemeBackground(props, theme),
    bottom: theme.spacing(4),
    position: 'relative',
    zIndex: 1,
  }),
  container: {
    background: 'transparent',
    maxWidth: 850,
  },
  stepper: () => ({
    borderRadius: '0 0 0 0',
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      padding: `0 ${theme.spacing(2)}px`,
    },
  }),
  subtitle: props => ({
    color: ThemeColor(props, theme),
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  }),
  svg: {
    bottom: 0,
    position: 'absolute',
    right: 0,
    width: '120%',
    zIndex: -1,
  },
  title: props => ({
    borderColor: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    marginBottom: theme.spacing(4),
    textAlign: 'justify',
    textTransform: 'capitalize',
  }),
});

const NODE = 'commons';
const SLOT = 'contact_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'back',
  'categories',
  'forms',
  'id',
  'services',
  'svg',
  'svg_show',
  'thank_label',
  'thank_subtitle',
  'thank_title',
  'title',
]);

const init = {
  document: {},
  forms: [],
  valid: false,
};

class ContactFormLayout extends Component {
  constructor(props) {
    super(props);

    const {
      proxy: {
        verbiage,
      },
    } = props || {};

    // init with forms
    init.forms = verbiage(copy.forms).map((form) => {
      const cloneForm = form;

      cloneForm.rows = form.rows && form.rows.map((row) => {
        const cloneRow = row;

        cloneRow.fields = cloneRow.fields.map((f) => {
          const cloneField = f;
          // add services
          if (f.key.includes('services')) {
            cloneField.options = copy.services;
          }

          return cloneField;
        });

        return cloneRow;
      });

      return cloneForm;
    });

    this.state = init;
  }

  props: {
    classes: Object,
    proxy: Object,
    setLoading: Function,
    variant: String,
  }

  handleBlur = (event) => {
    console.log(event);
  }

  handleChange = (e) => {
    const { document } = this.state;
    const cloneDocu = cloneDeep(document);
    const { target } = e;
    const { name, value } = target;

    cloneDocu[name] = value || null;

    this.setState({
      document: cloneDocu,
      valid: false,
    });
  }

  handleSubmit = (valid) => {
    const {
      proxy: {
        language,
      },
      setLoading,
      to,
    } = this.props;

    const {
      document,
    } = this.state;

    const cloneDocu = cloneDeep(document);

    // formating dates
    Object.keys(cloneDocu).forEach((key) => {
      const value = cloneDocu[key];
      if (value.mask) {
        cloneDocu[key] = value.format(value.mask);
      }
    });

    // Link on email:
    cloneDocu.source = window.location.href;
    // Current Lang:
    cloneDocu.language = language;

    // show loader
    setLoading(true);
    return new Promise((resolve, reject) => {
      const request = {
        data: cloneDocu,
        method: 'post',
        url: config.urls.form,
      };

      if (valid) {
        const makeRequest = async () => {
          try {
            const result = await axios(request);
            if (result && result.status === 200) {
              this.setState({
                valid,
              });

              resolve();
              // hide loader
              setLoading(false);
              scroller.scrollTo(`${to}-form`);
            }
          } catch (error) {
            let message = error.response
              ? error.response.data.message
              : error.message;
            message = message || 'Oops something went wrong';
            reject(message);
            // hide loader
            setLoading(false);
          }
        };

        makeRequest.call(this);
      } else {
        let message = error.response
          ? error.response.data.message
          : error.message;
        message = message || 'Oops something went wrong';
        reject(message);
      }
    });
  }

  render () {
    const {
      classes,
      proxy,
      to,
      variant,
    } = this.props;

    const {
      verbiage,
    } = proxy;

    const {
      document,
      forms,
      valid,
    } = this.state;

    return (
      verbiage &&
      <Paper className={classes.stepper} elevation={0}>
        {verbiage(copy.svg_show) && <SVGComponent src={verbiage(copy.svg)} className={classes.svg} variant="primary" />}
        <Element name={`${to}-form`}>
          <Fade left>
            <Stepper
              className={classes.container}
              copy={copy}
              document={document}
              forms={forms}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              proxy={proxy}
              variant={variant}
              valid={valid}
            />
          </Fade>
        </Element>
      </Paper>
    );
  }
}

// dispatch actionCreators
function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setLoading: setLoadingAction,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ContactFormLayout));
