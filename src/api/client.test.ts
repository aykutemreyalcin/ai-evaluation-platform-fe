import { describe, expect, it, vi } from 'vitest'
import { api } from './client'
import { datasetDetails, datasets, systems } from '../mocks/data'

describe('evaluation API client', () => {
  it('uses local fixtures when mock mode is enabled', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')

    await expect(api.systems()).resolves.toEqual(systems)
    await expect(api.datasets()).resolves.toEqual(datasets)
    await expect(api.dataset(datasetDetails[0].id)).resolves.toEqual(datasetDetails[0])
    expect(fetchSpy).not.toHaveBeenCalled()

    fetchSpy.mockRestore()
  })
})
