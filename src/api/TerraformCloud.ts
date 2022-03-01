import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './endpoints/Account'
import Plans from './endpoints/Plans'
import Applies from './endpoints/Applies'
import Runs from './endpoints/Runs'
import Workspaces from './endpoints/Workspaces'
import ConfigurationVersion from './endpoints/ConfigurationVersion'
import StateVersions from './endpoints/StateVersions'
import RemoteStateConsumer from './endpoints/RemoteStateConsumer'
import { AxiosInstance } from 'axios'

export class TerraformCloud extends EventEmitter {
  public Account: Account
  public Plans: Plans
  public Runs: Runs
  public Applies: Applies
  public Workspaces: Workspaces
  public ConfigurationVersion: ConfigurationVersion
  public StateVersions: StateVersions
  public RemoteStateConsumer: RemoteStateConsumer
  public client: AxiosInstance

  constructor(abortSignal: AbortSignal, apiKey: string) {
    super()
    this.client = terraformCloudApiClient(abortSignal, apiKey)

    this.Account = new Account(this.client)
    this.Plans = new Plans(this.client)
    this.Runs = new Runs(this.client)
    this.Applies = new Applies(this.client)
    this.Workspaces = new Workspaces(this.client)
    this.ConfigurationVersion = new ConfigurationVersion(this.client)
    this.StateVersions = new StateVersions(this.client)
    this.RemoteStateConsumer = new RemoteStateConsumer(this.client)
  }
}
