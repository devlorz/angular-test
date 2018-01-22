import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment total vote when upvote', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total vote when downvote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
