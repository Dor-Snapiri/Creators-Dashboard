import { create, type StoreApi } from 'zustand';
import { type CreatorDashboardState } from './CreatorDashboardState'

const INITIAL_STATE: CreatorDashboardState = {
    view: 'grid'
};

const creatorDashboardActions = (
    set: StoreApi<CreatorDashboardState>['setState'],
    get: () => CreatorDashboardState
) => (
    {
        toggleView: () => set(
            (state) => ({ view: state.view === 'grid' ? 'list' : 'grid' })
        ),
    }
)


type CreatorDashboardStore = CreatorDashboardState & ReturnType<typeof creatorDashboardActions>;

const useCreatorDashboard = create<CreatorDashboardStore>((set, get) => (
    {
        ...INITIAL_STATE,
        ...creatorDashboardActions(set, get),
    }
));

export default useCreatorDashboard;