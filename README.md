# arubaos-switch

Superagent utilities for interacting with the ArubaOS-Switch REST API.

* Super lightweight
* Simple API
* Based on [superagent's `Agent` class](https://visionmedia.github.io/superagent/#agents-for-global-state)
* Works with environment variables by default

## Installation

```bash
$ npm install arubaos-switch
```

## Usage

```javascript
import { useClient } from 'arubaos-switch';

function requestGetSystem(client) {
  return client
    .get('/system');
}

const response = await useClient({ fn: requestGetSystem });
```

## Testing

Tests are performed on an actual Aruba switch whose credentials are defined by environment variables.

```bash
$ ARUBA_OS_SWITCH_HOST=... npm test
```
