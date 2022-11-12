//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

const path = require('path');
const cp = require('child_process');
const {describe, it} = require('mocha');
const {assert} = require('chai');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

describe('Quickstart', () => {
  it('should run quickstart', async () => {
    // We no longer use service account credentials, so we must assert an error
    try {
      execSync(
        'node ./quickstart.js fake_account@long-door-651.iam.gserviceaccount.com https://www.googleapis.com/auth/iam',
        {cwd}
      );
    } catch (err) {
      assert.match(
        err,
        /Gaia id not found for email fake_account@long-door-651.iam.gserviceaccount.com/
      );
    }
  });
});